import BaseDatabase from "./BaseDatabase";
import { Service } from "typedi";
import { collection, getDocs } from "@firebase/firestore";

@Service()
export class QuestionsDBService extends BaseDatabase {
    async getQestions() {
        const questionsCollectionRef = collection(this.fs, "questions");
        const collectionSnap = await getDocs(questionsCollectionRef);
        const questions = collectionSnap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        return questions;
    }
}
