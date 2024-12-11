document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav button');
    const tabContents = document.querySelectorAll('.tab-content');
    const searchInput = document.querySelector('.search-input');
    const loadingSpinner = document.querySelector('.loading-spinner');

    const apps = [
        { icon: 'cpu', name: 'AI Assistant', description: 'Advanced conversational AI' },
        { icon: 'cloud', name: 'Cloud Computing', description: 'Scalable cloud solutions' },
        { icon: 'code', name: 'Code Generator', description: 'AI-powered code generation' },
        { icon: 'terminal', name: 'Command Center', description: