import React, {  useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker'
import styled from 'styled-components/native';
import { gql, useQuery, useMutation } from '@apollo/client';

const FormView = styled.View`
    padding: 10px;
    padding-top:20px
`;

const StyledInput = styled.TextInput`
    font-size: 18px;
    padding: 0px;
    width: 90%;
    height: 70%;
    text-align-vertical: top;
`
const FormButton = styled.TouchableOpacity`
    background: #0077E7;
    width: 40%;
    padding: 8px;
    margin-left: 30%;
    border-radius: 25;
`
const ButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

const NoteLayout = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const ImageLayout = styled.View`
  
    width: 60px;
    margin-left:10px
    height: auto; 
`

const ContentLayout = styled.View`
    width: 85%; 
    height: auto; 
    
`

const StyledImage = styled.Image`
    width: 45px; 
    height: 45px; 
    border-radius: 45;

`

const GET_TASK = gql`
    query task($id:ID!) {
        task(id: $id) {
            id
            createdAt
            updatedAt
            content
            completed
            author {
                username
                id
            }
        }
    }
`

const TaskForm = props => {
    const id = props.id


    
    const [content, setContent] = useState();
    const [completed, setCompleted] = useState();

    const { data, loading, error } = useQuery(GET_TASK, { variables: { id:id }});
   
    console.log(data)
    
    if(loading) return <Text></Text>
    
    const handleSubmit = () => {
        props.action({
            variables: {
                content: content,
                completed: completed
            }
        })
        props.navigation.navigate('Feed')
    }

    return (
        <FormView>

            <NoteLayout>

                <ImageLayout>
                    <StyledImage source={require('../images/profile-placeholder.jpg')} /> 
                </ImageLayout>

                <ContentLayout>
                    {props.formType ==='Edit' ? (
                        <StyledInput onChangeText={setContent} 
                            value={content}
                            defaultValue={data.task.content.toString()}
                         
                                            
                        />
                    ):(
                        <StyledInput onChangeText={setContent} 
                            value={content}
                            placeholder="Type your MarkUp task..."                    
                        />
                    )}
                    <Text>Completed: </Text>
                        <Picker
                            style={{ height: 50, width: 150 }}
                            onValueChange={setCompleted}
                            value={completed}
                        >
                            
                            <Picker.Item label="False" value="False" />
                            <Picker.Item label="True" value="True" />
                            <Picker.Item label="None" value="null" />

                        </Picker>
                    
                </ContentLayout>


            </NoteLayout>
            
 

            <FormButton onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
            </FormButton>

        </FormView>
        )
}

export default TaskForm;