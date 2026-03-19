import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Loader from './Loader';
import NewsPredictorPage from './NewsPredictorPage';
import NeumorphicDashboard from './components/Neumorphic/NeumorphicDashboard';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showNeumorphic, setShowNeumorphic] = useState(false);
  const [dashboardTab, setDashboardTab] = useState('Overview');

  const exploreDashboard = () => {
    setDashboardTab('Overview');
    setShowNeumorphic(true);
  };

  const openNewsCenter = () => {
    setDashboardTab('News Center');
    setShowNeumorphic(true);
  };

  const openPredictions = () => {
    setDashboardTab('Predictions');
    setShowNeumorphic(true);
  };

  const openPortfolio = () => {
    setDashboardTab('Portfolio');
    setShowNeumorphic(true);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let isTransitioning = false;

    lenis.on('scroll', (e) => {
      // e.progress is between 0 and 1. Check if user is at the very bottom and scrolling further down.
      if (e.progress > 0.99 && e.velocity > 0 && !showNeumorphic && !isTransitioning) {
        isTransitioning = true;
        // Small delay to ensure smooth feeling before snapping to dashboard
        setTimeout(() => {
          setDashboardTab('Overview');
          setShowNeumorphic(true);
        }, 150);
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [showNeumorphic]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (showNeumorphic) {
    return (
      <div className="reveal-up-visible reveal-up-transition">
         <NeumorphicDashboard initialTab={dashboardTab} />
      </div>
    );
  }

  return (
    <div className="reveal-up-visible reveal-up-transition">
      <NewsPredictorPage 
        onExploreDashboard={exploreDashboard} 
        onNewsClick={openNewsCenter}
        onPredictionsClick={openPredictions}
        onPortfolioClick={openPortfolio}
      />
    </div>
  );
}
