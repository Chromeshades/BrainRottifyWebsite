window.appConfig = {
    apiPrefix: '/api/api',  // Default for production
    debug: false
};

// Override config based on hostname
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.appConfig.apiPrefix = '/api';  // Use direct API path for local development
    window.appConfig.debug = true;
}