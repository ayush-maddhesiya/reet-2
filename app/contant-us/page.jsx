import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${data.error || 'Failed to send message'}`);
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
        <label>Message:</label>
        <textarea name="message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </div>
  );
}
