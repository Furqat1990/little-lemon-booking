import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email.includes("@")) errors.email = "Valid email is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (formData.guests < 1) errors.guests = "At least 1 guest required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitted(true);
    console.log("Booking Submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Reserve a Table</h1>
          {isSubmitted ? (
            <p className="text-green-600 font-semibold">Booking submitted successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label htmlFor="name" className="block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  aria-required="true"
                />
                {formErrors.name && <p className="text-red-600 text-sm">{formErrors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  aria-required="true"
                />
                {formErrors.email && <p className="text-red-600 text-sm">{formErrors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  aria-required="true"
                />
                {formErrors.date && <p className="text-red-600 text-sm">{formErrors.date}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block">Time</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  aria-required="true"
                />
                {formErrors.time && <p className="text-red-600 text-sm">{formErrors.time}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="guests" className="block">Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  id="guests"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {formErrors.guests && <p className="text-red-600 text-sm">{formErrors.guests}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="occasion" className="block">Occasion</label>
                <select
                  name="occasion"
                  id="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>
              </div>
              <Button type="submit" className="w-full mt-4">Book Now</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
