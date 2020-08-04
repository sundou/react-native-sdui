import React, { Component } from 'react'
import {
    Text, View, TouchableOpacity, Image, TextInput,
    StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements';

class VerifyCodeBtn extends Component {
    static defaultProps = {
        // source: null,
        // image: null,

    }

    constructor(props) {
        super(props)

        this.state = {
			disabled: false,
			count: 60
        }
	}

	clearTimer() {
		if (this.timer) {
			clearInterval(this.timer)
		}
	}
	
	startCount() {
		this.timer = setInterval(() => {
			let minsCount = this.state.count-1;

			this.setState({
				count: this.state.count-1
			})
			if (minsCount == 0) {
				this.clearTimer()
				this.setState({
					disabled: false
				})
			}
		}, 1000);
	}

	componentWillUnmount() {
		this.clearTimer();
	}


    render() {
        const {
			disabled = false,
			onPress = () => {}
		} = this.props;
		let tintColor = '#4B82FF'
		let isDisabled = disabled || this.state.disabled

		let title = '获取验证码'
		if (this.state.disabled) {
			title = `${this.state.count}s后` + title
		}

			// <TouchableOpacity style={styles.touchContainer}>
			// 	<Text style={{
			// 		fontSize: 12,
			// 		color: tintColor
			// 	}}>获取验证码</Text>
			// </TouchableOpacity>
        return (
			<Button
				onPress={() => {
					onPress();
					this.setState({
						disabled: true
					});
					this.setState({
						count: this.props.count || 10,
					}, this.startCount)
					
				}}
				disabled={isDisabled}
				buttonStyle={{
					paddingVertical: 3,
					paddingHorizontal: 6,
				}}
				title={title}
				type="outline"
			/>
        )
    }
}



const styles = StyleSheet.create({
	touchContainer: {
		borderColor: '#4B82FF',
		borderWidth: 0.5,
		borderRadius: 2,
		paddingVertical: 5,
		paddingHorizontal: 6,
	}
})

export default VerifyCodeBtn
