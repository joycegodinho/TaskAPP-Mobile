import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Markdown from 'react-native-markdown-renderer';
import { format } from 'date-fns';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const TaskView = styled.ScrollView`
    padding: 10px;
    color: #FFFFFF
`

const TaskLayout = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%; 
`

const ImageLayout = styled.View`
  
    width: 50px;
    margin-left:0px
    height: auto; 
`

const ContentLayout = styled.View`
    width: 85%; 
    height: auto; 
    
`

const StyledName = styled.Text`
    font-size: 17;
    font-weight: bold;
    color: #464e5c;
`

const StyledTime = styled.Text`
    color: #a8d9d5;
    justify-content: center;
    margin-left:40px;
    margin-right: 0px
`
const StyledStatus = styled.View`
    background-color: #a8d9d5;
    border-radius: 5px;
    padding-top: 0.7px;
    padding-bottom: 0.7px;
    padding-left: 2.5px;
    padding-right: 2.5px
`
const StyledStatusAsw = styled.Text`
    color: #7cc7c0;
    font-weight: bold;
    text-decoration: underline;
    margin-left:5px
`
const StyledStatusText = styled.Text`
    color: #354345;
    
`

const ViewName = styled.View`
    margin-left:0px;
    margin-right: 0px
    
`

const ViewTime = styled.View`
    margin-left:0px;
    justify-content: center;

    width: 15%; 
`
const ViewStatus = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row; 
`


const Task = props => {

    const noteDate = format(new Date(props.task.createdAt), 'MM/dd/yyyy')
    const currentDate = format(new Date(), 'MM/dd/yyyy')


    return (
        <TaskView>
            <TaskLayout>
                <ImageLayout>

                <MaterialCommunityIcons color='#FFFFFF' name="checkbox-marked-circle-outline" size={40}/>

                </ImageLayout>

                <ContentLayout>

                    <Text> 

                        <ViewName>
                        {props.index? (
                            <StyledName>Task {props.index}</StyledName>
                        ): (
                            <StyledName>Task</StyledName>
                        )}
                            
                        </ViewName>

                        <ViewTime>
                            <StyledTime>
                                {currentDate === noteDate ? (
                                    format(new Date(props.task.createdAt), 'H:mm')
                                ): (
                                    format(new Date(props.task.createdAt), 'H:mm MM/dd/yyyy')
                                )}
                            </StyledTime>
                        </ViewTime>

                    </Text>
                    <Markdown>{props.task.content}</Markdown>
                    {props.task.completed ?(
                         <ViewStatus>
                             <StyledStatus>
                                <StyledStatusText>Completed:</StyledStatusText>
                             </StyledStatus>
                             
                             <StyledStatusAsw>{props.task.completed}</StyledStatusAsw>     
                        </ViewStatus>
                    ):(null)}
                   

                </ContentLayout>

            </TaskLayout>

        </TaskView>
        )
}

export default Task;