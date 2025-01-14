import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const dRef = useRef(null);
  const eRef = useRef(null);
  const fRef = useRef(null);

  useEffect(() => {
    // Tạo đối tượng Lenis và cấu hình nó
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    function updateLenis(time) {
      lenis.raf(time);
    }

    requestAnimationFrame(function loop(time) {
      updateLenis(time);
      requestAnimationFrame(loop);
    });

    ScrollTrigger.refresh();

    // GSAP Animation cho div.d (Fade-in và di chuyển lên)
    gsap.to(dRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: dRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    // Animation cho div.e (Zoom-in)
    gsap.from(eRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: eRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    // Animation cho div.f (Xoay và mờ dần)
    gsap.from(fRef.current, {
      rotation: -90,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: fRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="a">
        <img src="https://picsum.photos/500/300.jpg" alt="" />
      </div>
      <div className="b">
        <img src="https://picsum.photos/500/300.jpg" alt="" />
      </div>
      <div className="c">
        <img src="https://picsum.photos/500/300.jpg" alt="" />
      </div>
      <div
        className="d"
        ref={dRef}
        style={{
          opacity: 0,
          transform: "translateY(50px)",
          height: "500px", // Đảm bảo chiều cao đủ lớn
        }}
      >
        <img src="https://picsum.photos/500/300.jpg" alt="" />
      </div>
      <div
        className="e"
        ref={eRef}
        style={{
          opacity: 0,
          transform: "scale(0.5)",
          height: "500px", // Đảm bảo chiều cao
        }}
      >
        <img src="https://picsum.photos/500/300.jpg" alt="" />
      </div>
      <div
        className="f"
        ref={fRef}
        style={{
          opacity: 0,
          transform: "rotate(-90deg)",
          height: "500px", // Đảm bảo chiều cao
        }}
      >
        <img src="https://picsum.photos/500/300.jpg" alt="" />
      </div>
    </>
  );
}

export default App;
