import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

class WidgetList extends Component {
    static navigationOptions = {title: 'Widgets'}
    constructor(props) {
        super(props)
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1
        }
    }
    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId")
        fetch("https://web2018-lexikacoyannakis.herokuapp.com/api/lesson/"+lessonId+"/widget")
            .then(response => (response.json()))
            .then(widgets => this.setState({widgets}))
    }
    render() {
        if (this.state.widgets && this.state.widgets.length > 0) {
            return (
                <View style={{padding: 15}}>
                    {this.state.widgets.map(
                        (widget, index) => (
                            <ListItem
                                onPress={() => this.props.navigation
                                    .navigate("QuestionList", {examId: widget.id})}
                                key={index}
                                subtitle={widget.description}
                                title={widget.title}/>))}
                </View>
            )
        } else {
            return (
                <View>
                    <Text h1>Screen A</Text>
                </View>
            )
        }
    }



}
export default WidgetList