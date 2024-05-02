import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    MateriaisReciclaveis: undefined;
    TelaConfig: undefined;
    Perfil: undefined;
    MapScreen: undefined;
  };
type NavegatorService = {
    
    navigation: StackNavigationProp<RootStackParamList>;
}

export {NavegatorService, RootStackParamList}
