export const FrontURI = {
    AUTH: 'auth',
    HOME: 'home',
    NEWS: 'news',
    NEWS_MANAGEMENT: 'news-management',
    NEWS_CATEGORY_MANAGEMENT: 'news-category-management',
    NEWS_CREATE: 'news-create',
    NEWS_DETAIL: 'news-detail',
    HOTEL_MANAGEMENT: 'hotel-management',
    USER_MANAGEMENT: 'user-management',
    TOUR_MANAGEMENT: 'tour-management',
    EVENT_MANAGEMENT: 'event-management',
    MARKETING_MANAGEMENT: 'marketing-management',
    EMAIL_TEMPLATE: 'email-template',
    CUSTOMER_MANAGEMENT: 'customer-management',
    SYSTEM_ERROR: 'system-error',
    NOT_FOUND: '**',
};

export const ApiURI = {
    // login
    LOGIN: '/admin/auth/login',
    REFRESH_TOKEN: '/admin/auth/refresh',

    // news category
    CREATE_NEWS_CATEGORY: '/admin/article-categories',
    GET_LIST_NEWS_CATEGORY: '/admin/article-categories',
    UPDATE_NEWS_CATEGORY: '/admin/article-categories',
    DELETE_NEWS_CATEGORY: '/admin/article-categories',

    // news
    CREATE_NEWS: '/admin/articles',
    GET_LIST_NEWS: '/admin/articles',
    GET_NEWS_DETAIL: '/admin/articles',
    DELETE_NEWS: '/admin/articles',
    UPDATE_NEWS: '/admin/articles',

    // upload s3
    UPLOAD_PRESIGNED: '/uploads/presigned-url',
};

export const LocalStorage = {
    LOGIN_INFO: 'login_info',
    USER_INFO: 'user_info',
};

export const HttpStatus = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    VALIDATION_FAILED: 422,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
};
