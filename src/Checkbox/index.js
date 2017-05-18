/**
 * Created by Utku on 24/03/2017.
 */
/* eslint-disable */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
import {getCorrectEventName} from '@material/animation/dist/mdc.animation';
import {MDCRipple, MDCRippleFoundation} from '@material/ripple/dist/mdc.ripple';
import {MDCCheckboxFoundation} from '@material/checkbox/dist/mdc.checkbox';
import '@material/checkbox/dist/mdc.checkbox.css';
import '@material/form-field/dist/mdc.form-field.css';

function getMatchesProperty(HTMLElementPrototype) {
    return [
        'webkitMatchesSelector', 'msMatchesSelector', 'matches',
    ].filter((p) => p in HTMLElementPrototype).pop();
}


const MATCHES = getMatchesProperty(HTMLElement.prototype);

export default class Checkbox extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        labelId: PropTypes.string,
        label: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        indeterminate: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        checked: false,
        disabled: false,
        indeterminate: false,
        onChange: () => {
        }
    }

    state = {
        classes: new ImmutableSet(),
        rippleCss: new ImmutableMap(),
        checkedInternal: this.props.checked,
        disabledInternal: this.props.disabled,
        indeterminateInternal: this.props.indeterminate
    }
    foundation = new MDCCheckboxFoundation({
        addClass: className => this.setState(prevState => ({
            classes: prevState.classes.add(className)
        })),
        removeClass: className => this.setState(prevState => ({
            classes: prevState.classes.remove(className)
        })),
        registerAnimationEndHandler: handler => {
            if (this.refs.root) {
                this.refs.root.addEventListener(getCorrectEventName(window, 'animationend'), handler);
            }
        },
        deregisterAnimationEndHandler: handler => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(getCorrectEventName(window, 'animationend'), handler)
            }
        },
        registerChangeHandler: handler => {
            if (this.refs.nativeCb) {
                this.refs.nativeCb.addEventListener('change', handler);
            }
        },
        deregisterChangeHandler: handler => {
            if (this.refs.nativeCb) {
                this.refs.nativeCb.removeEventListener('change', handler);
            }
        },
        getNativeControl: () => {
            if (!this.refs.nativeCb) {
                throw new Error('Invalid state for operation');
            }
            return this.refs.nativeCb;
        },
        forceLayout: () => {
            if (this.refs.nativeCb) {
                this.refs.nativeCb.offsetWidth;
            }
        },
        isAttachedToDOM: () => Boolean(this.refs.nativeCb),
    });

    rippleFoundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        isUnbounded: () => true,
        isSurfaceActive: () => this.refs.nativeCb[MATCHES](':active'),
        addClass: className => {
            this.setState(prevState => ({
                classes: prevState.classes.add(className)
            }));
        },
        removeClass: className => {
            this.setState(prevState => ({
                classes: prevState.classes.remove(className)
            }));
        },
        registerInteractionHandler: (evtType, handler) => {
            this.refs.nativeCb.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.refs.nativeCb.removeEventListener(evtType, handler);
        },
        updateCssVariable: (varName, value) => {
            this.setState(prevState => ({
                rippleCss: prevState.rippleCss.set(varName, value)
            }));
        },
        computeBoundingRect: () => {
            const {left, top} = this.refs.root.getBoundingClientRect();
            const DIM = 40;
            return {
                top,
                left,
                right: left + DIM,
                bottom: top + DIM,
                width: DIM,
                height: DIM,
            };
        },
    }));


    render() {
        const {id,labelId,label,checked,disabled,indeterminate,onChange,...otherProps} = this.props
        return (
            <div className="mdc-form-field" {...otherProps}>
                <div ref="root" className={`mdc-checkbox ${this.state.classes.toJS().join(' ')}`}>
                    <input ref="nativeCb"
                           id={this.props.id}
                           type="checkbox"
                           className="mdc-checkbox__native-control"
                           aria-labelledby={this.props.labelId}
                           checked={this.state.checkedInternal}
                           disabled={this.state.disabledInternal}
                           onChange={evt => {
                               this.setState({
                                   checkedInternal: this.refs.nativeCb.checked,
                                   indeterminateInternal: false
                               });
                               this.props.onChange(evt);
                           }}/>
                    <div className="mdc-checkbox__background">
                        <svg version="1.1"
                             className="mdc-checkbox__checkmark"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path className="mdc-checkbox__checkmark__path"
                                  fill="none"
                                  stroke="white"
                                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        );
    }

    componentDidMount() {
        this.foundation.init();
        this.rippleFoundation.init();
    }

    componentWillReceiveProps(props) {
        if (props.checked !== this.props.checked) {
            this.setState({checkedInternal: props.checked, indeterminateInternal: false});
        }
        if (props.indeterminate !== this.props.indeterminate) {
            this.setState({indeterminateInternal: props.indeterminate});
        }
        if (props.disabled !== this.props.disabled) {
            this.setState({disabledInternal: props.disabled});
        }
    }

    componentDidUpdate() {
        if (this.refs.nativeCb) {
            this.refs.nativeCb.indeterminate = this.state.indeterminateInternal;
        }
        if (this.refs.root) {
            this.state.rippleCss.forEach((v, k) => {
                this.refs.root.style.setProperty(k, v);
            });
        }
    }
}