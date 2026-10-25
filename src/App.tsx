import React, { useState } from 'react';
import { PageId, Trainer } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PlanModal } from './components/PlanModal';
import { TrainerModal } from './components/TrainerModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { MemberPortalPage } from './pages/MemberPortalPage';

import {
  TRAINERS,
  EQUIPMENT_FACILITIES,
  MEMBERSHIP_PLANS,
  COMPARISON_FEATURES,
  TESTIMONIALS,
  FAQS,
  TIMETABLE_CLASSES,
  GYM_STATS,
  GYM_BENEFITS
} from './data/gymData';

export function ForgeFitnessApp() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTrainerId, setSelectedTrainerId] = useState<string | undefined>(undefined);

  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('pro');

  const [trainerDetailModal, setTrainerDetailModal] = useState<Trainer | null>(null);

  const handleOpenBooking = (trainerId?: string) => {
    setSelectedTrainerId(trainerId || TRAINERS[0]?.id);
    setBookingModalOpen(true);
  };

  const handleOpenMembership = (planId?: string) => {
    setSelectedPlanId(planId || 'pro');
    setMembershipModalOpen(true);
  };

  const handleOpenTrainerDetails = (trainer: Trainer) => {
    setTrainerDetailModal(trainer);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111315] text-[#F4F3EE] selection:bg-[#C7FF3D] selection:text-[#111315]">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenMembershipModal={() => handleOpenMembership('pro')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(page) => setCurrentPage(page)}
            trainers={TRAINERS}
            equipment={EQUIPMENT_FACILITIES}
            plans={MEMBERSHIP_PLANS}
            testimonials={TESTIMONIALS}
            stats={GYM_STATS}
            benefits={GYM_BENEFITS}
            onOpenBooking={handleOpenBooking}
            onOpenMembership={handleOpenMembership}
            onOpenTrainerDetails={handleOpenTrainerDetails}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={(page) => setCurrentPage(page)}
            onOpenMembership={() => handleOpenMembership('pro')}
          />
        )}

        {currentPage === 'features' && (
          <FeaturesPage
            onNavigate={(page) => setCurrentPage(page)}
            trainers={TRAINERS}
            equipment={EQUIPMENT_FACILITIES}
            onOpenBooking={handleOpenBooking}
            onOpenTrainerDetails={handleOpenTrainerDetails}
            onOpenMembership={() => handleOpenMembership('pro')}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={(page) => setCurrentPage(page)}
            plans={MEMBERSHIP_PLANS}
            faqs={FAQS}
            comparisonFeatures={COMPARISON_FEATURES}
            onOpenMembership={handleOpenMembership}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={(page) => setCurrentPage(page)}
          />
        )}

        {currentPage === 'portal' && (
          <MemberPortalPage
            onNavigate={(page) => setCurrentPage(page)}
            classes={TIMETABLE_CLASSES}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={(page) => setCurrentPage(page)} />

      {/* Global Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        trainers={TRAINERS}
        selectedTrainerId={selectedTrainerId}
      />

      <PlanModal
        isOpen={membershipModalOpen}
        onClose={() => setMembershipModalOpen(false)}
        plans={MEMBERSHIP_PLANS}
        selectedPlanId={selectedPlanId}
      />

      <TrainerModal
        trainer={trainerDetailModal}
        onClose={() => setTrainerDetailModal(null)}
        onBookSession={(tId) => handleOpenBooking(tId)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ForgeFitnessApp />
    </ThemeProvider>
  );
}
