import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const accessKey = process.env.VITE_WEB3FORMS_ACCESS_KEY;

  useEffect(() => {
    const errors = {};

    if (!formData.name && touchedFields.name) errors.name = "Name is required";
    if (!formData.phone && touchedFields.phone)
      errors.phone = "Phone is required";
    if (!formData.email && touchedFields.email)
      errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email) && touchedFields.email)
      errors.email = "Email is invalid";
    if (!formData.subject && touchedFields.subject)
      errors.subject = "Subject is required";
    if (!formData.message && touchedFields.message)
      errors.message = "Message is required";
    if (formData.honeypot) errors.honeypot = "Bot detected";

    const { name, phone, email, subject, message, honeypot } = formData;
    const allFieldsFilled = name && phone && email && subject && message;

    setIsFormValid(
      allFieldsFilled && Object.keys(errors).length === 0 && !honeypot
    );

    setFormErrors(errors);
  }, [formData, touchedFields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });
  };

  const handleSubmit = (e) => {
    if (!isFormValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact" className="max-w-[1040px] min-h-screen m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        id="form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="access_key" value={accessKey} />
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />
        <input
          type="text"
          name="honeypot"
          style={{ display: "none" }}
          value={formData.honeypot}
          onChange={handleChange}
        />
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className={`border-2 rounded-lg p-3 flex ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formErrors.name && touchedFields.name && (
              <p className="text-red-500">{formErrors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className={`border-2 rounded-lg p-3 flex ${
                formErrors.phone ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {formErrors.phone && touchedFields.phone && (
              <p className="text-red-500">{formErrors.phone}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className={`border-2 rounded-lg p-3 flex ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            }`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.email && touchedFields.email && (
            <p className="text-red-500">{formErrors.email}</p>
          )}
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className={`border-2 rounded-lg p-3 flex ${
              formErrors.subject ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.subject && touchedFields.subject && (
            <p className="text-red-500">{formErrors.subject}</p>
          )}
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className={`border-2 rounded-lg p-3 ${
              formErrors.message ? "border-red-500" : "border-gray-300"
            }`}
            rows="10"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {formErrors.message && touchedFields.message && (
            <p className="text-red-500">{formErrors.message}</p>
          )}
        </div>
        <button
          className={`bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg ${
            !isFormValid
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
