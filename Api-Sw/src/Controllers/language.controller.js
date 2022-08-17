import { getConnection } from "./../database/database"; // importacion de conexion a la base de datos

//Consultar Todos los datos :) 

const getUsers = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT Id_Usuario, Nombre_Pila, Nombre_Usuario, Apellido_Usuario, Contraseña_Usuario, Id_Rol, Estado_Usuario, Edad_Usuario FROM  Usuario");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Consultar un Dato :) 

const getUser = async(req, res) => {

    try {
        const{ Id_Usuario  } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT Id_Usuario, Nombre_Pila, Nombre_Usuario, Apellido_Usuario, Contraseña_Usuario, Id_Rol, Estado_Usuario, Edad_Usuario FROM Usuario WHERE Id_Usuario = ?", Id_Usuario );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Agregar un Registro  

const addUser = async(req, res) => {

    try {
        const {Nombre_Pila, Nombre_Usuario, Apellido_Usuario, Contraseña_Usuario, Id_Rol, Estado_Usuario, Edad_Usuario} = req.body;
        if(Nombre_Pila ==undefined || Nombre_Usuario == undefined || Apellido_Usuario == undefined || Contraseña_Usuario == undefined || Id_Rol == undefined || Estado_Usuario == undefined || Edad_Usuario == undefined)
        {
            res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
        }
        const Usuarios={Nombre_Pila, Nombre_Usuario, Apellido_Usuario, Contraseña_Usuario, Id_Rol, Estado_Usuario, Edad_Usuario}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Usuario SET ?", Usuarios)
        res.json({message: "Registro Insertado"});
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

//Eliminar un Registro

const deleteUser = async(req, res) => {

    try {
        const{ Id_Usuario } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Usuario WHERE Id_Usuario = ?", Id_Usuario);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Actualizar un Registro

const updateUser = async(req, res) => {

    try {
        const{ Id_Usuario } = req.params;
        const {Nombre_Pila, Nombre_Usuario, Apellido_Usuario, Contraseña_Usuario, Id_Rol, Estado_Usuario, Edad_Usuario} = req.body;

        if(Id_Usuario == undefined ||Nombre_Pila ==undefined || Nombre_Usuario == undefined || Apellido_Usuario == undefined || Contraseña_Usuario == undefined || Id_Rol == undefined || Estado_Usuario == undefined || Edad_Usuario == undefined)
        {
            res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
        }
        const Usuario={ Id_Usuario, Nombre_Pila, Nombre_Usuario, Apellido_Usuario, Contraseña_Usuario, Id_Rol, Estado_Usuario, Edad_Usuario}
        const connection = await getConnection();
        const result = await connection.query("UPDATE Usuario SET ? WHERE Id_Usuario = ?", [Usuario, Id_Usuario]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Consultar Rol de usuario

const getUserAdmin = async(req, res) => {

    try {
        const{ Nombre_Rol } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT u.Nombre_Pila, r.Nombre_Rol FROM Usuario u INNER JOIN Rol r ON r.Id_Rol = u.Id_Rol WHERE Nombre_Rol = ?",Nombre_Rol);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Exportacion  de Methos de API - Rest 

export const methods = {
    getUsers,
    addUser,
    getUser,
    deleteUser,
    updateUser,
    getUserAdmin
};

