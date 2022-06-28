import { useFonts } from 'expo-font';
import React from 'react';

export const FontLoader: React.FC = ({ children }) => {
    const [fontsLoaded] = useFonts({
        'SF-Pro-Display-Bold': require('~/assets/fonts/SF-Pro-Display-Bold.otf'),
        'SF-Pro-Rounded-Black': require('~/assets/fonts/SF-Pro-Rounded-Black.otf'),
        'SF-Pro-Rounded-Bold': require('~/assets/fonts/SF-Pro-Rounded-Bold.otf'),
        'SF-Pro-Rounded-Heavy': require('~/assets/fonts/SF-Pro-Rounded-Heavy.otf'),
        'SF-Pro-Rounded-Light': require('~/assets/fonts/SF-Pro-Rounded-Light.otf'),
        'SF-Pro-Rounded-Medium': require('~/assets/fonts/SF-Pro-Rounded-Medium.otf'),
        'SF-Pro-Rounded-Regular': require('~/assets/fonts/SF-Pro-Rounded-Regular.otf'),
        'SF-Pro-Rounded-Semibold': require('~/assets/fonts/SF-Pro-Rounded-Semibold.otf'),
        'SF-Pro-Rounded-Thin': require('~/assets/fonts/SF-Pro-Rounded-Thin.otf'),
        'SF-Pro-Rounded-Ultralight': require('~/assets/fonts/SF-Pro-Rounded-Ultralight.otf'),
        'SF-Pro-Text-Black': require('~/assets/fonts/SF-Pro-Text-Black.otf'),
        'SF-Pro-Text-BlackItalic': require('~/assets/fonts/SF-Pro-Text-BlackItalic.otf'),
        'SF-Pro-Text-Bold': require('~/assets/fonts/SF-Pro-Text-Bold.otf'),
        'SF-Pro-Text-BoldItalic': require('~/assets/fonts/SF-Pro-Text-BoldItalic.otf'),
        'SF-Pro-Text-Heavy': require('~/assets/fonts/SF-Pro-Text-Heavy.otf'),
        'SF-Pro-Text-HeavyItalic': require('~/assets/fonts/SF-Pro-Text-HeavyItalic.otf'),
        'SF-Pro-Text-Light': require('~/assets/fonts/SF-Pro-Text-Light.otf'),
        'SF-Pro-Text-LightItalic': require('~/assets/fonts/SF-Pro-Text-LightItalic.otf'),
        'SF-Pro-Text-Medium': require('~/assets/fonts/SF-Pro-Text-Medium.otf'),
        'SF-Pro-Text-MediumItalic': require('~/assets/fonts/SF-Pro-Text-MediumItalic.otf'),
        'SF-Pro-Text-Regular': require('~/assets/fonts/SF-Pro-Text-Regular.otf'),
        'SF-Pro-Text-RegularItalic': require('~/assets/fonts/SF-Pro-Text-RegularItalic.otf'),
        'SF-Pro-Text-Semibold': require('~/assets/fonts/SF-Pro-Text-Semibold.otf'),
        'SF-Pro-Text-SemiboldItalic': require('~/assets/fonts/SF-Pro-Text-SemiboldItalic.otf'),
        'SF-Pro-Text-Thin.otf': require('~/assets/fonts/SF-Pro-Text-Thin.otf'),
        'SF-Pro-Text-ThinItalic': require('~/assets/fonts/SF-Pro-Text-ThinItalic.otf'),
        'SF-Pro-Text-Ultralight': require('~/assets/fonts/SF-Pro-Text-Ultralight.otf'),
        'SF-Pro-Text-UltralightItalic': require('~/assets/fonts/SF-Pro-Text-UltralightItalic.otf')
    });
    return (
        <>
            { fontsLoaded && children }
        </>
    );
};