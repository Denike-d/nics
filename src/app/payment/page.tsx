"use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { ProfileType } from "@/components/utils/types";
// import { dashboardRoutes } from "@/components/utils/dashboardRoutes";

// export default function PaymentPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     amount: "",
//   });

//   const router = useRouter();

//   const [userType, setUserType] = useState<ProfileType>(null);

//   useEffect(() => {
//     const data = localStorage.getItem("formData");
//     if (!data) return;

//     const parsed = JSON.parse(data);
//     setUserType(parsed.userType);
//   }, []);

//   function confirmPayment() {
//     if (!userType) return;
//     const dashboardUrl = dashboardRoutes[userType];
//     router.push(dashboardUrl);
//   }
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePay = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Payment data:", formData);
//     alert("Redirecting to E-Tranzact payment gateway...");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
//         <h1 className="text-2xl font-bold text-center mb-6">
//           E-Tranzact Payment
//         </h1>

//         <form onSubmit={handlePay} className="space-y-5">
//           {/* Name */}
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="John Doe"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="johndoe@email.com"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="08012345678"
//             />
//           </div>

//           {/* Amount */}
//           <div>
//             <label className="block mb-1 font-medium text-gray-700">
//               Amount (₦)
//             </label>
//             <input
//               type="number"
//               name="amount"
//               required
//               value={formData.amount}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="5000"
//               min={100}
//             />
//           </div>

//           {/* Pay Button */}
//           <button
//             type="submit"
//             onClick={confirmPayment}
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
//           >
//             Pay with E-Tranzact
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import { useCredoPayment } from "react-credo";
// import "./App.css";

// function generateRandomAlphanumeric(length) {
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * chars.length);
//     result += chars[randomIndex];
//   }
//   return result;
// }
// const transRef = generateRandomAlphanumeric(20);

// const config = {
//   key: "0PUB0024x8k5w4TU1dq570Jb8zJn0dLH", //You should store your API key as an environment variable
//   customerFirstName: "Ciroma",
//   customerLastName: "Chukwuma",
//   email: "ciroma.chukwuma@example.com",
//   amount: 109000,
//   currency: "NGN",
//   bearer: 0,
//   reference: transRef, // Please generate your own transRef that is unique for each transaction
//   customerPhoneNumber: "2348032698425",
//   callbackUrl: "https://merchant-test-line.netlify.app/successful",
//   metadata: {
//     customFields: [
//       { variable_name: "gender", value: "Male", display_name: "Gender" },
//       {
//         variable_name: "address",
//         value: "27/29 Adeyemo Alakija street, VI",
//         display_name: "Address",
//       },
//     ],
//   },
//   onClose: () => {
//     console.log("Widget Closed");
//   },
//   callBack: (response) => {
//     console.log("Successful Payment");
//     console.log(response);
//     window.location.href = response.callbackUrl;
//   },
// };

// const CredoHookExample = () => {
//   const initializePayment = useCredoPayment(config);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           initializePayment();
//         }}
//       >
//         Credo Hooks Implementation
//       </button>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {" "}
//           Learn React{" "}
//         </a>
//       </header>
//       <CredoHookExample />
//     </div>
//   );
// }

// export default App;
