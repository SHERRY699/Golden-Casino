"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/modal/Modal"; // Import modal component

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "login" or "signup"

  const openModal = (type:string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full flex items-center fixed justify-between px-4 h-[100px] bg-[#131313] border-b-[1px] border-silver z-50">
      <div className="flex items-center gap-3">
        <Image src={"/images/logo.webp"} width={100} height={80} alt="logo" />
        <h1 className="text-xl font-bold text-white">Golden Casino</h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => openModal("login")}
          className="w-[80px] h-[50px] font-semibold bg-[#262626] hover:bg-black/10 flex items-center text-white cursor-pointer justify-center rounded-lg hover:text-[#ebbe7d]"
        >
          Login
        </button>
        <button
          onClick={() => openModal("signup")}
          className="w-[80px] h-[50px] font-semibold bg-[#ebbe7d] flex items-center text-black cursor-pointer justify-center rounded-lg"
        >
          Sign Up
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalType === "login" ? (
          <div>
            <h2 className="text-xl font-semibold text-white">Login</h2>
            <p className="text-white">Enter your credentials to log in.</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-white">Sign Up</h2>
            <p className="text-white">Create a new account.</p>
          </div>
        )}
      </Modal>
    </section>
  );
};
