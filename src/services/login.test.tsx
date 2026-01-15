import { beforeEach, describe, expect, it, vi } from "vitest";
import login from "./login";

describe("testando login",()=>{

    // Criamos o mock fora para ter acesso a ele
    const mockAlert = vi.fn();

    beforeEach(() => {
        // Substituímos o alert global pelo nosso mock antes de cada teste
        vi.stubGlobal('alert', mockAlert);
        // Limpamos o histórico do mock para um teste não afetar o outro
        mockAlert.mockClear();
    });

    it("deve chamar o alerta com a mensagem correta", () => {
        login("da@gmail.com", "123456");
        
        // Verificamos se foi chamado
        expect(mockAlert).toHaveBeenCalled();
        
        // Verifique se a mensagem enviada foi a correta
        expect(mockAlert).toHaveBeenCalledWith("Bem vindo ao sistema\nSeu email:da@gmail.com\nSua senha: 123456");
    });

    it("nao deve exibir a mensagem de boas vindas sem email e senha", () => {
        login("da@gmail.com", "123456");
        
        // Verificamos se foi chamado
        expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo ao sistema");
    })
})