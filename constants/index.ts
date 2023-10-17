export const fontsLoadedConfig = {
    'Inter-Regular': require('../public/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../public/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('../public/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('../public/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('../public/fonts/Inter-Light.ttf'),
    'Inter-Thin': require('../public/fonts/Inter-Thin.ttf'),
};

export const fontConfig = {
    Regular: 'Inter-Regular',
    SemiBold: 'Inter-SemiBold',
    Light: 'Inter-Light',
    Thin: 'Inter-Thin',
    Medium: 'Inter-Medium',
    Bold: 'Inter-Bold',
};

export const spacing = {
    half: '4px',
    base: '8px',
    default: '12px',
    medium: '14px',
    large: '16px',
    largeS: '22px',
    subtitle: '24px',
    title: '26px',
    largeS2: '32px',
};

export const colors = {
    primary: {
        100: '',
        200: '',
        300: '',
        400: '',
        500: '#F85B36',
        600: '',
    },
    gray: {
        100: '#FEFEFE',
        200: '#F6F7F9',
        300: '#EAECF0',
        400: '',
        500: '',
        600: '#667085',
        800: '',
        1000: '#000000',
    },
    error: {
        100: '#FEF3F2',
        200: '#FECDCA',
        500: '#D92D20',
        600: '#B42318',
    },
    success: {
        100: '#E1F9EB',
        200: '#D1FADF',
        500: '#039855',
        600: '#027A48',
    },
    alert: {
        100: '#FEF4EB',
        200: '#F9D3B0',
        500: '#E57207',
        600: '#B95900',
    },
};

export const buttonConfig = {
    Utils: {
        fontFamily: 'Jano-SemiBold',
    },
    Default: {
        Primary: {
            Default: {
                Height: '56px',
                BackgroundColor: colors.primary[500],
                Radius: '10px',
                Padding: '16px 24px',
                Color: colors.gray[100],
                IconSize: 24,
                JustifyContent: 'center',
                FontWeight: 600,
                FontSize: spacing.large,
            },
            White: {
                Height: '56px',
                BackgroundColor: colors.gray[300],
                Radius: '10px',
                Padding: '16px 24px',
                Color: colors.gray[600],
                IconSize: 18,
                JustifyContent: 'center',
                FontWeight: 600,
                FontSize: spacing.large,
            },
        },
    },
    Ontouch: {
        Primary: {
            Default: {
                Height: '56px',
                BackgroundColor: colors.primary[600],
                Radius: '10px',
                Padding: '16px 24px',
                Color: colors.gray[100],
            },
        },
    },
};