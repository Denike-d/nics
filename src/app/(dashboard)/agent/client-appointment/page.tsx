// import { useState } from 'react';
// import { Dialog, DialogContent, DialogOverlay } from './components/ui/dialog';
// import { Badge } from './components/ui/badge';
// import { Button } from './components/ui/button';
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/ui/collapsible';
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   Clock,
//   ChevronDown,
//   ChevronUp,
//   Eye,
//   FileText
// } from 'lucide-react';
// import { ImageWithFallback } from './components/figma/ImageWithFallback';

// export default function App() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [appointmentDetailsOpen, setAppointmentDetailsOpen] = useState(true);
//   const [clearanceHistoryOpen, setClearanceHistoryOpen] = useState(true);

//   // Mock data
//   const clientData = {
//     profilePhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
//     fullName: 'Adebayo Olamide',
//     organizationName: 'EcoTech Industries Ltd.',
//     nesreaId: 'NESR-2024-78452',
//     userType: 'Company',
//     email: 'a.olamide@ecotech.ng',
//     phone: '+234 803 456 7890',
//     address: '15 Adeola Odeku Street, Victoria Island, Lagos State, Nigeria',
//     totalClearances: 0,
//     appointmentStatus: 'pending',
//     appointmentDate: '2025-11-15',
//     appointmentTime: '10:00 AM',
//     appointmentDuration: '45 minutes',
//     lastModified: 'November 10, 2025, 3:45 PM',
//     messageFromClient: 'I would like to discuss the environmental clearance application for our new manufacturing facility. We have prepared all necessary documentation and would appreciate guidance on the next steps in the approval process.',
//     clearanceHistory: [
//       { id: 'CLR-2024-001', date: 'October 15, 2024, 2:30 PM', status: 'approved' },
//       { id: 'CLR-2024-032', date: 'August 22, 2024, 11:15 AM', status: 'approved' },
//       { id: 'CLR-2023-156', date: 'December 5, 2023, 9:00 AM', status: 'rejected' }
//     ],
//     lastUpdatedBy: 'Agent Funmilayo Adeleke (AGT-00234)',
//     lastUpdatedDate: 'November 10, 2025, 3:45 PM'
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'approved':
//         return 'bg-green-100 text-green-700 border-green-200';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-700 border-yellow-200';
//       case 'rejected':
//         return 'bg-red-100 text-red-700 border-red-200';
//       case 'revoked':
//         return 'bg-gray-100 text-gray-700 border-gray-200';
//       default:
//         return 'bg-gray-100 text-gray-700 border-gray-200';
//     }
//   };

//   const handleAccept = () => {
//     alert('Accept appointment confirmation dialog would appear here');
//   };

//   const handleReject = () => {
//     alert('Reject appointment confirmation dialog would appear here');
//   };

//   const handleRevoke = () => {
//     alert('Revoke appointment confirmation dialog would appear here');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <Button onClick={() => setIsOpen(true)} className="bg-blue-600 hover:bg-blue-700">
//         Open Appointment Details
//       </Button>

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogOverlay className="bg-black/50" />
//         <DialogContent className="max-w-[900px] max-h-[90vh] overflow-y-auto p-0 gap-0">
//           <div className="bg-white rounded-2xl shadow-2xl">
//             {/* Breadcrumb */}
//             <div className="px-8 pt-6 pb-3">
//               <p className="text-gray-500 text-sm">
//                 Client Management {'>'} View Details
//               </p>
//             </div>

//             {/* Section 1: Header - Client Overview */}
//             <div className="px-8 pb-6 border-b border-gray-200">
//               <div className="flex gap-6">
//                 {/* Left: Profile Photo */}
//                 <div className="flex-shrink-0">
//                   <ImageWithFallback
//                     src={clientData.profilePhoto}
//                     alt="Client Profile"
//                     className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
//                   />
//                 </div>

//                 {/* Middle: Client Details */}
//                 <div className="flex-1">
//                   <h2 className="text-gray-900 mb-1">{clientData.fullName}</h2>
//                   <p className="text-gray-900 mb-2">{clientData.organizationName}</p>
//                   <p className="text-gray-500 text-sm mb-3">{clientData.nesreaId}</p>

//                   <div className="space-y-2">
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <span className="text-sm">User Type:</span>
//                       <Badge variant="outline" className="border-gray-300">
//                         {clientData.userType}
//                       </Badge>
//                     </div>

//                     <div className="flex items-center gap-2 text-gray-700">
//                       <Mail className="w-4 h-4 text-gray-400" />
//                       <a href={`mailto:${clientData.email}`} className="text-sm hover:underline text-blue-600">
//                         {clientData.email}
//                       </a>
//                     </div>

//                     <div className="flex items-center gap-2 text-gray-700">
//                       <Phone className="w-4 h-4 text-gray-400" />
//                       <a href={`tel:${clientData.phone}`} className="text-sm hover:underline text-blue-600">
//                         {clientData.phone}
//                       </a>
//                     </div>

//                     <div className="flex items-start gap-2 text-gray-600">
//                       <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
//                       <p className="text-sm">{clientData.address}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right: Summary Card */}
//                 <div className="flex-shrink-0 bg-gray-50 rounded-xl p-4 border border-gray-200 w-48">
//                   <div className="text-center mb-3">
//                     <p className="text-gray-500 text-sm mb-1">Total Clearances</p>
//                     <p className="text-gray-900 text-3xl">{clientData.totalClearances}</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-gray-500 text-sm mb-2">Status</p>
//                     <Badge className={`${getStatusColor(clientData.appointmentStatus)} capitalize`}>
//                       {clientData.appointmentStatus}
//                     </Badge>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Section 2: Appointment Details - Collapsible */}
//             <Collapsible open={appointmentDetailsOpen} onOpenChange={setAppointmentDetailsOpen}>
//               <div className="border-b border-gray-200">
//                 <CollapsibleTrigger className="w-full px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
//                   <h3 className="text-gray-900">Appointment Details</h3>
//                   {appointmentDetailsOpen ? (
//                     <ChevronUp className="w-5 h-5 text-gray-400" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-400" />
//                   )}
//                 </CollapsibleTrigger>

//                 <CollapsibleContent>
//                   <div className="px-8 pb-6">
//                     <div className="grid grid-cols-2 gap-4 mb-5">
//                       <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                         <p className="text-gray-500 text-sm mb-2">Appointment Status</p>
//                         <Badge className={`${getStatusColor(clientData.appointmentStatus)} capitalize`}>
//                           {clientData.appointmentStatus}
//                         </Badge>
//                       </div>

//                       <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                         <p className="text-gray-500 text-sm mb-2">Appointment Date & Time</p>
//                         <div className="flex items-center gap-2 text-gray-700">
//                           <Calendar className="w-4 h-4 text-gray-400" />
//                           <span className="text-sm">{clientData.appointmentDate}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-gray-700 mt-1">
//                           <Clock className="w-4 h-4 text-gray-400" />
//                           <span className="text-sm">{clientData.appointmentTime}</span>
//                         </div>
//                       </div>

//                       <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                         <p className="text-gray-500 text-sm mb-2">Appointment Duration</p>
//                         <p className="text-gray-700 text-sm">{clientData.appointmentDuration}</p>
//                       </div>

//                       <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                         <p className="text-gray-500 text-sm mb-2">Last Modified</p>
//                         <p className="text-gray-700 text-sm">{clientData.lastModified}</p>
//                       </div>
//                     </div>

//                     {clientData.messageFromClient && (
//                       <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
//                         <div className="flex items-center gap-2 mb-2">
//                           <FileText className="w-4 h-4 text-blue-600" />
//                           <p className="text-blue-900 text-sm">Message from Client</p>
//                         </div>
//                         <p className="text-gray-700 text-sm leading-relaxed">
//                           {clientData.messageFromClient}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </CollapsibleContent>
//               </div>
//             </Collapsible>

//             {/* Section 3: Clearance History - Collapsible */}
//             <Collapsible open={clearanceHistoryOpen} onOpenChange={setClearanceHistoryOpen}>
//               <div className="border-b border-gray-200">
//                 <CollapsibleTrigger className="w-full px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
//                   <h3 className="text-gray-900">Clearance History</h3>
//                   {clearanceHistoryOpen ? (
//                     <ChevronUp className="w-5 h-5 text-gray-400" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-400" />
//                   )}
//                 </CollapsibleTrigger>

//                 <CollapsibleContent>
//                   <div className="px-8 pb-6">
//                     <div className="border border-gray-200 rounded-lg overflow-hidden">
//                       <table className="w-full">
//                         <thead className="bg-gray-50">
//                           <tr>
//                             <th className="px-4 py-3 text-left text-gray-600 text-sm">Clearance ID</th>
//                             <th className="px-4 py-3 text-left text-gray-600 text-sm">Date & Time Submitted</th>
//                             <th className="px-4 py-3 text-left text-gray-600 text-sm">Status</th>
//                             <th className="px-4 py-3 text-left text-gray-600 text-sm">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {clientData.clearanceHistory.map((clearance, index) => (
//                             <tr key={clearance.id} className={index !== clientData.clearanceHistory.length - 1 ? 'border-b border-gray-200' : ''}>
//                               <td className="px-4 py-3 text-gray-700 text-sm">{clearance.id}</td>
//                               <td className="px-4 py-3 text-gray-700 text-sm">{clearance.date}</td>
//                               <td className="px-4 py-3">
//                                 <Badge className={`${getStatusColor(clearance.status)} capitalize text-xs`}>
//                                   {clearance.status}
//                                 </Badge>
//                               </td>
//                               <td className="px-4 py-3">
//                                 <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
//                                   <Eye className="w-4 h-4" />
//                                   <span className="text-sm">View</span>
//                                 </button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                     <p className="text-gray-600 text-sm mt-3">
//                       Total Clearances: {clientData.totalClearances}
//                     </p>
//                   </div>
//                 </CollapsibleContent>
//               </div>
//             </Collapsible>

//             {/* Section 4: Action Buttons */}
//             <div className="px-8 py-6 bg-gray-50 border-b border-gray-200">
//               <div className="flex gap-3 justify-end">
//                 <Button
//                   onClick={handleAccept}
//                   className="bg-green-600 hover:bg-green-700 hover:shadow-lg hover:shadow-green-200 transition-all duration-200"
//                 >
//                   Accept Appointment
//                 </Button>
//                 <Button
//                   onClick={handleReject}
//                   variant="destructive"
//                   className="bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-200 transition-all duration-200"
//                 >
//                   Reject Appointment
//                 </Button>
//                 <Button
//                   onClick={handleRevoke}
//                   variant="outline"
//                   disabled={clientData.appointmentStatus !== 'approved'}
//                   className="border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-gray-200 transition-all duration-200"
//                 >
//                   Revoke Appointment
//                 </Button>
//               </div>
//             </div>

//             {/* Section 5: Footer Audit Info */}
//             <div className="px-8 py-4 text-center">
//               <p className="text-gray-500 text-sm">
//                 Last updated by {clientData.lastUpdatedBy} on {clientData.lastUpdatedDate}
//               </p>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
