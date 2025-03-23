import MyCalendar from "@/components/calender/react_Calender";

function Calender() {
  console.log(import.meta.env.VITE_SOME_KEY);

  return (
    <div className="container mt-12">
      <MyCalendar />
    </div>
  );
}

export default Calender;
