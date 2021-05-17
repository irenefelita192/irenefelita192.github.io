import { PureComponent, createRef } from 'react';
import { bool, func, object, string, node } from 'prop-types';
import { container, fallbackImgContainer, lazyFade } from './style';
class Lazyload extends PureComponent {
  static propTypes = {
    alt: string,
    className: string,
    containerClassName: string,
    containerStyle: object,
    fadeIn: bool,
    width: string,
    height: string,
    initial: string,
    lazy: bool,
    src: string,
    style: object,
    webp: bool,
    onClick: func,
    children: node,
    onErrorShowDefault: bool,
    onEmptyShowDefault: bool,
    errorImgClassName: string,
    handleCallback: func
  };

  static defaultProps = {
    alt: '',
    className: '',
    containerClassName: '',
    containerStyle: {},
    fadeIn: true,
    width: '100%',
    height: 'auto',
    initial: '',
    lazy: true,
    onClick: () => {},
    style: {},
    webp: true,
    children: null,
    src: null,
    onErrorShowDefault: false,
    onEmptyShowDefault: false,
    errorImgClassName: '',
    handleCallback: () => {}
  };

  constructor(props) {
    super(props);

    this.image = createRef();
    this.state = {
      isLoaded: false,
      sources: props.lazy ? props.initial : props.image,
      sourceSet: '',
      sourceSizes: '',
      widthSet: false
    };
  }

  componentDidMount() {
    const { src } = this.props;
    this.props.handleCallback(false);
    this.mounted = true;
    if (src) {
      if (this.props.lazy) {
        if (this.loadPolyfills()) {
          this.initObserver();
        } else {
          this.loadImage(global.webpSupport && this.props.webp);
        }
      } else {
        this.loadImage(global.webpSupport && this.props.webp);
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(prevProps) {
    this.props.handleCallback(this.state.isLoaded);
    const { src } = this.props;
    if (src !== prevProps.src) {
      if (this.props.lazy) {
        if (this.loadPolyfills()) {
          this.initObserver();
        } else {
          this.loadImage(global.webpSupport && this.props.webp);
        }
      } else {
        this.loadImage(global.webpSupport && this.props.webp);
      }
    }
  }

  get dataProps() {
    const dataProps = {};

    Object.entries(this.props).forEach(([key, value]) => {
      if (key.startsWith('data-')) {
        dataProps[key] = value;
      }
    });
    return dataProps;
  }

  get imageWebPUrl() {
    return `${this.props.src}.webp`;
  }

  initObserver = () => {
    const options = {
      threshold: [0.1, 0.5, 0.75, 1.0]
    };

    let io = new IntersectionObserver(entries => {
      const { isIntersecting, intersectionRatio } = entries[0];

      if (isIntersecting && intersectionRatio > 0) {
        this.createImage();
        io.disconnect();
        io = null;
      }
    }, options);

    io.observe(this.image.current);
  };

  createImage = () => {
    this.loadImage(global.webpSupport && this.props.webp);
  };

  loadImage = (isWebP = false) => {
    if (this.mounted) {
      const { src, srcset, sizes } = this.props;
      this.setState({ sources: src, sourceSet: srcset, sourceSizes: sizes });
    }
  };

  loadPolyfills = () => {
    if (!this.supportsIntersectionObserver()) {
      return false;
    }
    return true;
  };

  supportsIntersectionObserver = () => {
    return (
      'IntersectionObserver' in global &&
      'IntersectionObserverEntry' in global &&
      'intersectionRatio' in IntersectionObserverEntry.prototype
    );
  };

  render() {
    const { sources, isError, isLoaded, sourceSet, sourceSizes } = this.state;
    const {
      alt,
      containerClassName,
      containerStyle,
      style,
      onClick,
      children,
      className,
      src,
      errorImgClassName,
      srcset,
      onHoverBorder,
      fallbackImageUri,
      sizes
    } = this.props;

    const showChildren = children && !src;
    return (
      <>
        {showChildren && (
          <div
            className={`${containerClassName || ''} ${container} ${lazyFade}`}
            style={{
              ...containerStyle
            }}
            onClick={onClick}
          >
            {children}
          </div>
        )}
        {fallbackImageUri && (
          <img src={fallbackImageUri} className={`${fallbackImgContainer} fallbackImg fadeIn`} style={{ opacity: isLoaded ? 0 : 1 }} />
        )}
        {!showChildren && (
          <div
            className={`${containerClassName || ''} ${container} imageWrapper ${isLoaded ? 'loaded' : ''}`}
            style={{
              ...containerStyle,
              position: fallbackImageUri ? 'absolute' : 'relative',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            onClick={onClick}
          >
            {onHoverBorder && <div className={'imageBorder'} />}

            {!isError && (
              <img
                ref={this.image}
                className={`${className || ''} fadeIn`}
                style={{
                  ...style,
                  opacity: isLoaded ? 1 : 0
                }}
                sizes={sourceSizes}
                srcSet={sourceSet}
                src={sources}
                onLoad={() => this.setState({ isLoaded: true })}
                onError={() => this.setState({ sources: fallbackImageUri })}
                alt={alt}
              />
            )}
            {isError && !fallbackImageUri && <div className={`errorBackground ${errorImgClassName || ''}`} />}
          </div>
        )}
      </>
    );
  }
}

export default Lazyload;
