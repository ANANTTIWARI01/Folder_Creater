import { error } from "console";
import express from "express"
import fs from "fs"
const router = express.Router()

router.post("/folder", function createFolder(req, res) {
    try {
        const { number } = req.body
        for (let i = 0; i < number; i++) {
            const folderName = `C:\\Users\\Anant\\OneDrive\\Desktop\\Folder making Project\\Backend\\Anant_${i}`;
            const fileName = `C:\\Users\\Anant\\OneDrive\\Desktop\\Folder making Project\\Backend\\Anant_${i}/example.txt`
            const data = 'hello'
            if (!fs.existsSync(folderName)) {
                fs.mkdirSync(folderName, { recursive: true });
                fs.writeFile(fileName, data, { encoding: 'utf8' }, (error) => {
                    if (error) throw error
                    console.log("File has been created to specific folder");
                })
            }

        }
        res.status(200).json({ message: "Folder created successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the folder." });
    }
});

export default router;


