import React from 'react';
import SKILLS from '@/data/skills';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

export default function Skills() {
  return (
    <div className="mb-16">
      {/* Header with dark mode support */}
      <h2 className="mb-8 text-3xl font-heading sm:text-4xl text-blue-600 dark:text-blue-400">Skills</h2>

      {SKILLS.map((item, id) => (
        <div key={id} className="mb-8">
          {/* Section headers with dark mode support */}
          <h3 className="mb-4 text-lg font-heading sm:text-xl text-gray-800 dark:text-gray-200">{item.field}</h3>

          <div className="mb-10 flex flex-wrap gap-5">
            {item.skills.map((skill, id) => (
              <TooltipProvider key={id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex items-center gap-2">
                      {/* You may want to add a fill color for dark mode if needed */}
                      {React.createElement(skill.icon, { 
                        className: 'h-8 w-8 text-gray-800 dark:text-gray-200', 
                        title: skill.skill 
                      })}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded shadow-md">
                    {skill.skill}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}