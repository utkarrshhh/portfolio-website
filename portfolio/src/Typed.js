import Typed from 'typed.js';

const TypedList = () => {
  const typedRef = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Apples', 'Bananas', 'Oranges'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div ref={typedRef}></div>
  );
};

export default TypedList;