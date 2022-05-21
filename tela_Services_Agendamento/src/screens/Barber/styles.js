import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFFFF;
    
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    
    
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    backgroud-color: #FFFFFF;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    backgroud-color: #000000;
    border-radius: 5px;
    margin: 3px;`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #FF5C00;
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;
`;


export const PageBody = styled.ImageBackground`
    background-color: #000000;
    border-top-left-radius: 50px;
    margin-top: -50px;
    width: 100%;
    height: 100%;
    
    
    
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-widght: 4px;
    border-color: #FFFFFF;
`;

export const UserInfo = styled.ImageBackground`
    flex: 1;
    position: absolute;
    margin-left: 40%;
    margin-top: 60px;
    
`;

export const UserInfoName = styled.Text`
    color: #FF5C00;;
    font-size: 20px;
    font-weight: bold;
    
    
`;

export const ServiceArea = styled.View`
   margin-top: 10px;
   margin-bottom: 19px;

`;

export const ServicesTitle = styled.Text`
    font-size: 18px;
    color: #FF5C00;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: 20px;
`;

export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;

export const ServiceInfo = styled.View`
    flex: 1;
    
`;

export const ServiceName = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: #FF5C00;
    
    width: 100%;
    height: 25px;
    
    

`;

export const ServicePrice = styled.Text`
    font-size: 14px;
    color: #FF5C00;
    
   
`;

export const ServiceChoseButton = styled.TouchableOpacity`
    background-color: #FF5C00;
    border-radius: 10px;
    padding: 10px 15px;
`;

export const ServiceChoseBtnText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
`;

