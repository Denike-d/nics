"use client";

import React, { useState } from "react";

interface AddImportItemFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AddImportItemModal({
  isOpen,
  onClose,
  onSuccess,
}: AddImportItemFormProps) {
  const [formData, setFormData] = useState({
    itemName: "",
    hsCode: "",
    unit: "",
    quantity: "",
    cargoNo: "",
    performaInvoice: "",
    countryOfOrigin: "",
    portOfEntry: "",
    purposeOfImportation: "",
    finalDestinationAddress: "",
    expectedDateOfArrival: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);

    // Your API call here
    // const response = await fetch('/api/items', { method: 'POST', body: JSON.stringify(formData) })

    // After successful submission:
    onSuccess?.();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-scroll">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-6">
          {/* Form */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-6">
              Add Import Item
            </h1>

            <div className="space-y-5">
              {/* Item Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Description <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* HS Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HS Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="hsCode"
                  value={formData.hsCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HS Description <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="hsCode"
                  value={formData.hsCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Unit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unit <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select unit</option>
                    <option value="kg">Kg</option>
                    <option value="ton">Ton</option>
                    <option value="liter">Liter</option>
                    <option value="piece">Piece</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Performa Invoice <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="performaInvoice"
                  value={formData.performaInvoice}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Cargo/Freight No */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cargo/Freight No
                </label>
                <input
                  type="text"
                  name="cargoNo"
                  value={formData.cargoNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Country of Origin */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country of Origin <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="countryOfOrigin"
                    value={formData.countryOfOrigin}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select country</option>
                    <option value="china">China</option>
                    <option value="usa">USA</option>
                    <option value="uk">United Kingdom</option>
                    <option value="germany">Germany</option>
                    <option value="india">India</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Port of Entry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Port of Entry <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="portOfEntry"
                    value={formData.portOfEntry}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select port</option>
                    <option value="lagos">Lagos Port</option>
                    <option value="tincan">Tin Can Island Port</option>
                    <option value="apapa">Apapa Port</option>
                    <option value="onne">Onne Port</option>
                    <option value="calabar">Calabar Port</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Purpose of Importation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose of Importation <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="purposeOfImportation"
                    value={formData.purposeOfImportation}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select purpose</option>
                    <option value="resale">For Resale</option>
                    <option value="personal">Personal Use</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="industrial">Industrial Use</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Final Destination Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Final Destination Address{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="finalDestinationAddress"
                  value={formData.finalDestinationAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Expected Date of Arrival */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected date of arrival{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="expectedDateOfArrival"
                  value={formData.expectedDateOfArrival}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-green-700 hover:bg-green-800 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Add Import Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
