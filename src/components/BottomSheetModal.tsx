import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


type Props = {

    onPress?: () => void;
    onPositivePress?: () => void;
    onNegativePress?: () => void;
}

const SingleBottomSheetModal = ({ onPress }: Props) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const handlePresentModalPress = useCallback(() => {
        console.log(bottomSheetModalRef.current?.present());
        
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <Button
                      onPress={handlePresentModalPress}
                    // onPress={onPress}
                    title="Present Modal"
                    color="black"
                />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    containerStyle={{ backgroundColor: '#00000050' }}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        {/* {Props.children} */}
                    </BottomSheetView>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 24,
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default SingleBottomSheetModal;