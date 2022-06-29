/** */
export const getCurrentDateFormatted = (): string => {
    return (new Date()).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
};