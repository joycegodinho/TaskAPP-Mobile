import React, {  useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const FormView = styled.View`
    padding: 10px;
`;

const StyledInput = styled.TextInput`
    border: 1px solid #9eb1cf;
    border-radius: 5px;
    font-size: 18px;
    padding: 8px;
    margin-top: 24px;
    background-color: #ffffff
    elevation: 2
`
const FormLabel = styled.Text`
    font-size: 18px;
    font-weight: bold;
`
const FormButton = styled.TouchableOpacity`
    background: #67bdb6;
    width: 40%;
    padding: 8px;
    margin-left: 30%;
    border-radius: 25px;
    elevation:2
    margin-top: 35px;
`
const ButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

const SignUp = styled.TouchableOpacity`
    margin-top: 20px;
`

const Link = styled.Text`
    color: #67bdb6;
    font-weight: bold;
`

const UserForm = props => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    

    const handleSubmit = () => {
        props.action({
            variables: {
                email: email,
                password: password,
                username: username
            }
        })
    }

    return (
        <FormView>
            
            <StyledInput onChangeText={text => setEmail(text)} 
                       value={email} 
                       textContentType="emailAddress"
                       autoCompleteType="email"
                       autoFocus={true}
                       autoCapitalize="none"
                       placeholder="Email"
            />
            {props.formType === 'signUp' && (
                <View>
                    
                    <StyledInput onChangeText={text => setUsername(text)} 
                            value={username} 
                            textContentType="username"
                            autoCapitalize="none"
                            placeholder="Username"
                    />
                </View>
            )}


            <StyledInput onChangeText={text => setPassword(text)} 
                       value={password} 
                       textContentType="password"
                       secureTextEntry={true}
                       autoCapitalize="none"
                       placeholder="Password"
            />

            <FormButton onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
            </FormButton>

            {props.formType === 'signIn' && (
                <SignUp onPress={() => props.navigation.navigate('SignUp')}>
                    <Text><Text>Need an account? </Text><Link>Sign Up</Link></Text>
                    
                </SignUp>
            )}

        </FormView>
        )
}

export default UserForm;