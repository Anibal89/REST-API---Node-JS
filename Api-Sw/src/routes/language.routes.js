import { Router } from "express";
import { methods as LanguageController } from "./../Controllers/language.controller";

// Mapeo de metodos 

const router = Router();

router.get("/", LanguageController.getUsers);
router.get("/:Id_Usuario", LanguageController.getUser);
router.get("/:Nombre_Rol", LanguageController.getUserAdmin);
router.post("/", LanguageController.addUser);   
router.delete("/:Id_Usuario", LanguageController.deleteUser); 
router.put("/:Id_Usuario", LanguageController.updateUser); 
export default router;