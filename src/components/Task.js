import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Markdown from 'react-native-markdown-renderer';
import { format } from 'date-fns';



const TaskView = styled.ScrollView`
    padding: 10px;
    color: #FFFFFF
`

const TaskLayout = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto; 
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

const StyledName = styled.Text`
    font-size: 17;
    font-weight: bold;
`

const StyledTime = styled.Text`
    color: #616161;
    margin-left:30px
    
`

const ViewName = styled.View`
    margin-left:0px;
    
`

const ViewTime = styled.View`
    margin-right:0px;
    width: 15%; 
`

const Task = props => {

    const noteDate = format(new Date(props.task.createdAt), 'MM/dd/yyyy')
    const currentDate = format(new Date(), 'MM/dd/yyyy')


    return (
        <TaskView>
            <TaskLayout>
                <ImageLayout>

                <StyledImage source={require('../images/profile-placeholder.jpg')} />

                </ImageLayout>

                <ContentLayout>

                    <Text> 

                        <ViewName>
                            <StyledName>
                                {props.task.author.username} {' '}
                            </StyledName>
                            
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
                         <Text>Completed? {props.task.completed}</Text>
                    ):(null)}
                   

                </ContentLayout>

            </TaskLayout>

        </TaskView>
        )
}

export default Task;