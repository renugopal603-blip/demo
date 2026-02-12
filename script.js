document.addEventListener('DOMContentLoaded', () => {
    // Footer Website Expandable Link
    const websiteLink = document.getElementById('footer-website-link');

    if (websiteLink) {
        websiteLink.addEventListener('click', (e) => {
            // Prevent default only if clicking the trigger area, allow sub-links to work
            if (e.target.closest('.expand-trigger')) {
                e.preventDefault();
                websiteLink.classList.toggle('is-expanded');
            }
        });
    }

    // Language Dropdown
    const langSelector = document.getElementById('lang-selector');
    const langDropdown = document.getElementById('lang-dropdown');

    if (langSelector && langDropdown) {
        // Toggle dropdown on click
        langSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('active');
            langDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langSelector.contains(e.target) && !langDropdown.contains(e.target)) {
                langSelector.classList.remove('active');
                langDropdown.classList.remove('show');
            }
        });

        // Handle language option clicks (optional - for future functionality)
        const langOptions = langDropdown.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                // Remove active class from all options
                langOptions.forEach(opt => opt.classList.remove('active'));
                // Add active class to clicked option
                option.classList.add('active');
                // Close dropdown
                langSelector.classList.remove('active');
                langDropdown.classList.remove('show');
            });
        });
    }

    // Header Navigation Dropdown (Click-based)
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        const link = item.querySelector('a');

        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Check if this item is already active
                const isActive = item.classList.contains('active');

                // Close all other dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-item')) {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
