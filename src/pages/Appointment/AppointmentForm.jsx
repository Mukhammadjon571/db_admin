import React from "react";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../components/container/ContentHeader";
import Button from "../../components/ui/Button";

const AppointmentForm = () => {
  // Inputni valuelarini boshqaradi, har bittasiga alohida yoziladi
  const [fullName, setFullName] = useInput("");
  const [passport, setpassport] = useInput("");
  const [select, setselect] = useInput("");
  //   redirect funcksiya
  const navigate = useNavigate();

  //   Submit funcsiya
  const onSubmit = async (e) => {
    // page reload bomasligiga funksiya
    e.preventDefault();
    // Zapros
    const res = await fetch("https://lore.com/122" + 12, {
      headers: {
        auth: "bearer",
      },
      method: "POST",
      body: JSON.stringify({
        nimadur: fullName,
      }),
    });
    // response ishladimi tekshirish
    if (res.ok) {
      const data = await res.json();
      // bu sizga kerak bomasa kerak srazu redirect qilasiz
      navigate(-1); // bitta orqaga
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {/* title kerak bob qolsa shu component dan foydalanasiz */}
      <ContentHeader>
        Forma <span className="grow"></span>{" "}
        <Button onClick={() => navigate(-1)}>Ortga</Button>
      </ContentHeader>
      {/* Buyogi inputlar */}
      {/* Hohlasez padding berasiz, p-[son] */}
      <div className="p-10">
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">Full name:</div>
          <input
            type="text"
            value={fullName}
            placeholder="Full name:"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setFullName}
            required
          />
        </div>
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">Passport ID:</div>
          <input
            type="text"
            value={passport}
            placeholder="Passport ID:"
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            onChange={setpassport}
            required
          />
        </div>
        <div className="flex items-center justify-center mt-3">
          <div className="w-[300px]">Choose Serial:</div>
          <select
            name=""
            value={select}
            onChange={setselect}
            className="border-b m-2 w-[500px] p-4 bg-[#f4f4f4]"
            placeholder="Select:"
            id=""
          >
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
          </select>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            type="reset"
            className="bg-red-300 text-white rounded-md p-3 bg-[orange] px-6"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-3 px-6 bg-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AppointmentForm;
