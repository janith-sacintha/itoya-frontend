import { useState } from "react"
import fileUpload from "../../utils/mediaUpload"
import toast from "react-hot-toast"

export default function TestPage(){

    const [files , setFiles] = useState([])

    async function handleUpload(){
        console.log(files)

        const promisesArray = files.map(file => fileUpload(file)
        )

        const responses = await Promise.all(promisesArray)
        console.log(responses)



/*
        fileUpload(files).then((url)=>{
            console.log(url)
            toast.success("File uploaded successfully")
        }).catch(
            (error)=>{
                console.log(error)
                toast.error(error)
            }
        )*/
    }

    return(
        <div className="w-full h-screen flex items-center justify-center">
            <input type="file"
            multiple
            accept="image/*"
            onChange={
                (e)=>{
                    setFiles(Array.from(e.target.files))
                }
            }/>
            <button className="cursor-pointer h-[25px] w-[100px] bg-blue-500 text-white font-bold rounded-md"
            onClick={handleUpload}>
                upload
            </button>
        </div>
    )
}