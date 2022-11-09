import { Head } from "$fresh/runtime.ts";
import { Button } from "../components/Button.tsx";
import { Modal } from "../components/Modal.tsx";
import { useState } from "preact/hooks";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = setIsOpenModal(false);
  const openModal = setIsOpenModal(true)
  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        {isOpenModal && (   
          <Modal action={() => closeModal}>
            <>
              <div className="flex justify-center md:py-[2.48vw] w-full relative py-[1.707vw]">
                <img
                  src='https://zeedog.vteximg.com.br/arquivos/provador-cachorro-medidas.gif'
                  className="h-auto md:max-w-[200.41px] max-w-[165.75px] "
                />
              </div>
              <p>
                Ficamos muito felizes de saber que você tem um cachorro vira-lata. Sabia que o Zeca, o cachorro que serviu de inspiração para a criação da Zee, também era um SRD (sem raça definida)?
                <br />
                <br />
                Como eles são únicos, você pode selecionar uma raça que tenha o porte similar, ou usar o nosso
                <br />
                <b>provador virtual</b> para descobrir o melhor tamanho para o seu cachorro.
              </p>
              <div className="pt-9 w-full text-[.875rem] leading-7 tracking-[1.12px] text-[#777777] font-normal flex flex-col items-center">
                <Button className="font-body rounded-3xl bg-blue-20 hover:bg-black text-white w-full font-semibold leading-[1.375rem] tracking-[.12rem] h-[44px] min-w-[130px] max-w-[293px] uppercase">
                  PROVADOR VIRTUAL
                </Button>
                <a className="text-underline text-[#777777] leading-[45px]" href="#">Selecionar uma raça similar</a>
              </div>
            </>
          </Modal>
        )}
        <Button onClick={() => openModal} className="py-1.5 mt-10 w-1/2 font-body rounded-3xl bg-[#1A9CFC] bg-green-10 hover:bg-black text-white w-full font-semibold leading-8">
          Click here
        </Button>
      </div>
    </section>
  );
}