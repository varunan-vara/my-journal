// File is ignored
import {firebaseConfig, storageLoc} from "./firebase-config";
import * as firebase from 'firebase/app';
import { getFirestore, query, orderBy, collection, doc, getDocs, getDoc, limit, DocumentReference, DocumentData } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Init Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app, storageLoc);

console.log(storage)

interface article {
    id: string;
    title: string;
    author: string;
    description: string;
    name: string;
    date: number;
    wordcount: number;
    tags: Array<string>;
}

// Error Checked function that retrieves articles from Firebase
async function getArticle (document: DocumentReference) {
    const snap = await getDoc(document);
    // returnvalue is perdefined in case something screws up
    var returnval : article = {
        id: document.id,
        title: "No Data Retrieved",
        author: "No Data Retrieved",
        description: "No Data Retrieved",
        name: "No Data Retrieved",
        date: 0,
        wordcount: 0,
        tags:[]
    }
    // Build a better error system - not intuitive, very temporary
    if (!(snap.exists())) {
        console.warn("Could not find articles - getArticle() function. Error Table below:");
        console.table({
            "DocumentReference" : document,
            "Document Id": document.id,
            "Docuemnt Path": document.path,
            "Document Parent": document.parent
            });
    } else {
        try {
            const data = snap.data();
            returnval = {
                id: document.id,
                title: data.title,
                author: data.author,
                description: data.description,
                name: data.name,
                date: data.date.seconds,
                wordcount: data.wourdcount,
                tags: data.tags
            };
        } catch (error) {
            console.error("Article type could not be set - getArticle() function. Error Table below:");
            console.table({
                "Error": error
            })
        }
    }
    return returnval;
}

async function getArticlebyName (articleName: string) {
    const docRef = doc(db, "blog-posts", articleName);
    const returnval = await getArticle(docRef);
    return returnval
}

// Function to get recent set of articles
async function getRecentArticles(numberOfArticles : number) {
    const posts = collection(db, "blog-posts");
    const pq = query(posts, orderBy("date", "asc"), limit(numberOfArticles));
    const pqSnapshot = await getDocs(pq);
    const returnval : DocumentData[] = [];

    // This is really dumb implimentation
    pqSnapshot.forEach((doc) => {
        returnval.push(doc);
    })

    return returnval;
}

export {getArticlebyName};