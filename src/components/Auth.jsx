import { useEffect, useState } from "react";
import pb from "./lib/pocketbase"

const Auth = () => {

    const [ lifts, setLifts ] = useState([]);

    const authPB = async () => {
        // store mail and passwort in a separate .env file
        await pb.admins.authWithPassword("", "")
    }

    const fetchLifts = async () => {
        const records = await pb.collection('lifts').getFullList({
            sort: '-created',
        });

        if(records) {
            setLifts(records);
        }
    }

    useEffect(() => {
        authPB();
        fetchLifts();
     }, [pb.authStore.isValid])

    return ( 
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-black font-bold">Amount of Lifts:</h1>
            <div className="flex flex-col">
                <ul>
                {lifts.map((lift) => (
                    <li key={ lift.id } className="text-black">{ lift.name }</li>
                ))}
                </ul>
            </div>
        </div>
     );
}
 
export default Auth;