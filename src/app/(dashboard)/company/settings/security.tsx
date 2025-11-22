import React, { useState } from "react";

export default function SecuritySettings() {
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showEmailChange, setShowEmailChange] = useState(false);
  const [securityData, setSecurityData] = useState({
    email: "example@gmail.com",
    currentEmail: "",
    newEmail: "",
    confirmEmail: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [emailData, setEmailData] = useState({});

  const handleSecurityChange = (field: string, value: string) => {
    setSecurityData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEmailChange = () => {
    if (securityData.newEmail !== securityData.confirmEmail) {
      alert("Emails do not match!");
      return;
    }
    console.log("Email change submitted:", securityData);
    setShowEmailChange(false);
    setSecurityData((prev) => ({
      ...prev,
      email: securityData.newEmail,
      currentEmail: "",
      newEmail: "",
      confirmEmail: "",
    }));
  };

  const handlePasswordChange = () => {
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password change submitted:", securityData);
    setShowPasswordChange(false);
    setSecurityData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Security Settings
          </h1>
          <p className="text-sm text-gray-600">
            Set up security measures for additional protection
          </p>
        </div>

        {/* Email Address Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Email Address
              </h3>
              <p className="text-sm text-gray-600">{securityData.email}</p>
            </div>
            <button
              onClick={() => setShowEmailChange(!showEmailChange)}
              className="px-5 py-2 border border-green-600 text-green-600 rounded-md text-sm font-medium hover:bg-green-50 transition-colors"
            >
              Change Email
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Password
              </h3>
              <p className="text-sm text-gray-600">{"0".repeat(12)}</p>
            </div>
            <button
              onClick={() => setShowPasswordChange(!showPasswordChange)}
              className="px-5 py-2 border border-green-600 text-green-600 rounded-md text-sm font-medium hover:bg-green-50 transition-colors"
            >
              Change Password
            </button>
          </div>

          {showEmailChange && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Your current email
                </label>
                <input
                  type="email"
                  value={securityData.currentEmail}
                  onChange={(e) =>
                    handleSecurityChange("currentEmail", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="current@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  New email
                </label>
                <input
                  type="email"
                  value={securityData.newEmail}
                  onChange={(e) =>
                    handleSecurityChange("newEmail", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="newemail@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Confirm Email
                </label>
                <input
                  type="email"
                  value={securityData.confirmEmail}
                  onChange={(e) =>
                    handleSecurityChange("confirmEmail", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="newemail@example.com"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={handleEmailChange}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
                >
                  Change email
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Password Change Form */}
        {showPasswordChange && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Your current password
              </label>
              <input
                type="password"
                value={securityData.currentPassword}
                onChange={(e) =>
                  handleSecurityChange("currentPassword", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                placeholder="00112234455"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                New password
              </label>
              <input
                type="password"
                value={securityData.newPassword}
                onChange={(e) =>
                  handleSecurityChange("newPassword", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                placeholder="abcdefgh"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={securityData.confirmPassword}
                onChange={(e) =>
                  handleSecurityChange("confirmPassword", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                placeholder="abcdefgh"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={handlePasswordChange}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
              >
                Change password
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
