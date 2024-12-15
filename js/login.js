function showForm(formId) {
  const forms = document.querySelectorAll('.auth-form');
  forms.forEach(form => form.classList.add('hidden'));
  document.getElementById(formId).classList.remove('hidden');
}