document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('https://telegram-api-bekend.vercel.app/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert('Formularz wysłany!');
          form.reset();
        } else {
          const errorData = await response.text();
          alert(`Błąd wysyłania formularza: ${response.statusText}`);
          console.error('Server error:', errorData);
        }
      } catch (error) {
        alert('Wystąpił błąd podczas wysyłania formularza.');
        console.error('Fetch error:', error);
      }
    });
  });
});

  