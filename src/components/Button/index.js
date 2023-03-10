import React from 'react';
import { Link } from 'react-router-dom';
import { oneOf, func, string, bool } from 'prop-types';

const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push('btn-primary');
  if (props.isLarge) className.push('btn-lg');
  if (props.isSmall) className.push('btn-sm');
  if (props.isBlock) className.push('btn-block');
  if (props.hasShadow) className.push('btn-shadow');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push('disabled');
    return (
      <span className={className.join(' ')} style={props.style}>
        {props.isLoading ? (
          <div className='spinner-border spinner-border-sm mx-5'>
            <span className='sr-only'>Loading...</span>
          </div>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: oneOf(['button', 'link']),
  onClick: func,
  target: string,
  href: string,
  className: string,
  isPrimary: bool,
  isDisabled: bool,
  isLoading: bool,
  isLarge: bool,
  isSmall: bool,
  isBlock: bool,
  isExternal: bool,
  hasShadow: bool,
};
