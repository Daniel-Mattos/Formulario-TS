import { api } from "@/api";

const login = async(email:string, senha:string):Promise<void> =>{
    const data:any = await api
    if(email !== data.email) {
        return alert("Email inválido")
    }
    alert(`Bem vindo ao sistema\nSeu email:${email}\nSua senha: ${senha}`)
}; 

export default login