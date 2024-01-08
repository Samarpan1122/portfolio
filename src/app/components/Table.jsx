"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const AchievementSection = () => {
  const achievements = [
    { awardDetails: "Invitation to San Francisco Summit(Fully Funded)", time: "2024-01-05", awardedBy: "Hackclub California", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/San%20F.pdf?alt=media&token=7f437ac0-ba35-47a6-9c9b-a6b9d86773f0" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "Offered for Computer Science(Undergraduate)", time: "2024-01-04", awardedBy: "University of Nebraska-Lincoln", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/unl.pdf?alt=media&token=6f6d3e84-eaf1-4149-912f-c2fec3ba1909" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "Scholarship For class 11", time: "2023-11-15", awardedBy: "DPS FARIDABD,India", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/sc_lat.pdf?alt=media&token=044ad165-03e9-4cb1-b91e-525609e6928e" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "$100 For Best PCB design", time: "2023-10-17", awardedBy: "Hackclub California", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/ob2.pdf?alt=media&token=54c5829a-07a2-4fb3-b17b-a9516651fce2" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "$100 For Best PCB design", time: "2023-10-12", awardedBy: "Hackclub California", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/ob1.pdf?alt=media&token=4d4a8d6a-543d-475e-ba47-08b0010a0fc7" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "Mini Game Console(Sprig)", time: "2023-09-25", awardedBy: "Hackclub California", details: <a href="https://github.com/hackclub/sprig/pull/1089" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },   
    { awardDetails: "4th the Place(Chat4fun)", time: "2023-08-27", awardedBy: "CodeDay(App/Web development Hackathon Organised by IIT Delhi)", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/certificate_iit.pdf?alt=media&token=8d35ffc3-2674-479f-98a1-2eef6be40098" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "Certificate of Completion(Job4all)", time: "2023-08-27", awardedBy: "CodeDay(App/Web development Hackathon Organised by IIT Delhi)", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/certificate_iit_other.pdf?alt=media&token=5f2c75aa-0fac-449c-b8cf-afcbe7510586" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "4th Place(Chat4fun)", time: "2023-07-22", awardedBy: "DPS INTERNATIONAL SAKET(SYNTAX v7.1 App/Web development Hackathon)", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/syntax.pdf?alt=media&token=c5e65043-9f95-459c-8ba8-4265636b6547" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "Certificate of Achievement(Google code)", time: "2018", awardedBy: "Google", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/google%20code.pdf?alt=media&token=2351dec6-7092-4a10-a803-7b523846258b" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "Scholar badge 2021-22", time: "2021", awardedBy: "DPS FARIDABD,India", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/scholar%20badge%20certificate.pdf?alt=media&token=9261fd22-68c7-49d8-a3b3-ea53e2ff7a55" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "Certificate of Achievement(French Olympiad 2018)", time: "2018", awardedBy: "French Embassy and others", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/french%20olympiad.pdf?alt=media&token=e52731fa-17ce-43b1-b833-93d991eb8fab" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    { awardDetails: "Space(Certificate of Participation)", time: "2017", awardedBy: "SPACE Astronomy Club", details: <a href="https://firebasestorage.googleapis.com/v0/b/codeday-32a37.appspot.com/o/space.pdf?alt=media&token=48e82ace-e764-41c2-b454-57ca8ea51b31" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3">view</a> },
    
    
  ];

  return (
    <section id="Achievements" className="mb-8">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Achievements and Awards
      </h2>
      <div className="overflow-x-auto">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Achievements and Awards</TableColumn>
            <TableColumn>Date/Month/Year</TableColumn>
            <TableColumn>Awarded/Offered by</TableColumn>
            <TableColumn>Details of Certificates/Links</TableColumn>
          </TableHeader>
          <TableBody>
            {achievements.map((achievement, index) => (
              <TableRow key={index}>
                <TableCell>{achievement.awardDetails}</TableCell>
                <TableCell>{achievement.time}</TableCell>
                <TableCell>{achievement.awardedBy}</TableCell>
                <TableCell>{achievement.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default AchievementSection;
