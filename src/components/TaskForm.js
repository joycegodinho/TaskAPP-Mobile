import React, {  useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker'
import styled from 'styled-components/native';
import { gql, useQuery, useMutation } from '@apollo/client';

const getBackgroundColor = () => {
    var colors = ["#dfe7f5", "#eff3fa", "#e7edf7"];
    var len = colors.length;
    var randomNum = Math.floor(Math.random()*len);
    var color = colors[randomNum];
    colors.splice(randomNum, 1);
    return color;
};

const FormView = styled.View`
    padding: 10px;
    padding-top:20px
`;

const StyledInput = styled.TextInput`
    font-size: 18px;
    height: 68%;
    text-align-vertical: top;
    margin-right: 5px;
`
const FormButton = styled.TouchableOpacity`
    background: #67bdb6;
    width: 40%;
    padding: 8px;
    margin-left: 30%;
    border-radius: 25px;
    elevation:2
`
const ButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`

const NoteLayout = styled.View`
    align-items: center
    width: auto;
`

const ContentLayout = styled.View`

    margin: 12px;
    margin-top: 30px
  

    width: 300px;
    height: 65%;
    

    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 1.5px;

    border-right-width: 1px;
    border-right-color: #ced0ce;

    border-top-width: 1px;
    border-top-color: #ced0ce;

    border-left-width: 1px;
    border-left-color: #ced0ce;

    border-bottom-width: 1px;
    border-bottom-color: #ced0ce;

    border-radius: 10px;

    background-color: ${getBackgroundColor};
    
    elevation: 2
    
`
const StyledStatus = styled.View`
    background-color: #a8d9d5;
    border-radius: 5px;
    padding-top: 0.7px;
    padding-bottom: 0.7px;
    padding-left: 2.5px;
    padding-right: 2.5px;
    width: 36%
`

const StyledStatusText = styled.Text`
    color: #354345;
    margin-left:6px
    
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

                <ContentLayout>
                    {props.formType ==='Edit' ? (
                        <StyledInput onChangeText={setContent} 
                            value={content}
                            multiline={true}
                            defaultValue={data.task.content.toString()}
                         
                                            
                        />
                    ):(
                        <StyledInput onChangeText={setContent} 
                            value={content}
                            multiline={true}
                            placeholder="Type your MarkUp task..."                    
                        />
                    )}
                    
                    <View>
                        <StyledStatus>
                            <StyledStatusText>Completed?</StyledStatusText>
                        </StyledStatus>
                        
                        <Picker
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) =>setCompleted(itemValue)}
                            selectedValue={completed}
                            itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
                        >
                            
                            <Picker.Item label="False" value="False" />
                            <Picker.Item label="True" value="True" />
                            <Picker.Item label="None" value="" />

                        </Picker>
                    </View>

                    
                </ContentLayout>


            </NoteLayout>
            
 

            <FormButton onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
            </FormButton>

        </FormView>
        )
}

export default TaskForm;