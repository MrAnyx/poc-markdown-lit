<?php

namespace App\Twig;

use Parsedown;
use Twig\TwigFilter;
use Twig\Extension\AbstractExtension;

class AppFilters extends AbstractExtension
{

   /**
    * @return TwigFilter[]
    */
   public function getFilters(): array
   {
      return [
         new TwigFilter('markdown', [$this, 'renderMarkdown']),
      ];
   }

   public function renderMarkdown(string $thing) {
      $Parsedown = new Parsedown();
      $Parsedown->setSafeMode(true);
      return $Parsedown->text($thing);
   }

}