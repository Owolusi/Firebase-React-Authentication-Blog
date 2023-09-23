import { collection } from "firebase/firestore";
import {db} from '../firebase/config'

export const blogCollectionRef=collection(db, 'blogs')

