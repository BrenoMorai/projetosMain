import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Contact = () => {
    // Estado para indicar se os dados estão carregando
    const [loading, setLoading] = useState(true);
    
    // Estado para armazenar a mensagem carregada da "API fictícia"
    const [message, setMessage] = useState("");

    // Hook useEffect: Simula uma chamada de API ao montar o componente
    useEffect(() => {
        setTimeout(() => {
            // Define a mensagem fictícia após 2 segundos
            setMessage("Bem-vindo à página de contato! Preencha o formulário abaixo.");
            setLoading(false); // Finaliza o estado de carregamento
        }, 2000); // Define o tempo de espera como 2 segundos
    }, []); // Array vazio: executa o efeito apenas na montagem do componente

    return (
        <div>
            <Header pageTitle="contact" siteTitle="contatos"/>
           <div >
             {/* Renderização condicional: Mostra "Carregando" enquanto os dados estão sendo carregados */}
             {loading ? (
                <p>Carregando informações...</p>
            ) : (
                <div className="card">
                    {/* Exibe a mensagem carregada */}
                    <p>{message}</p>
                    
                    {/* Formulário de contato simples */}
                    <form>
                        <label>
                            Nome:
                            {/* Campo de entrada para o nome */}
                            <input type="text" placeholder="Seu nome" />
                        </label>
                        <br />
                        <label>
                            Email:
                            {/* Campo de entrada para o email */}
                            <input type="email" placeholder="Seu email" />
                        </label>
                        <br />
                        {/* Botão para enviar o formulário */}
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            )}
           </div>
        </div>
    );
};

export default Contact;
