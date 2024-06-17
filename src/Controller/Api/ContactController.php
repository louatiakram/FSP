<?php
// src/Controller/Api/ContactController.php

namespace App\Controller\Api;

use App\Entity\Contact;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/api/contacts', name: 'create_contact')]
    public function create(Request $request, ManagerRegistry $managerRegistry): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Accessing EntityManager via ManagerRegistry
        $entityManager = $managerRegistry->getManager();

        // Create and persist Contact entity
        $contact = new Contact();
        $contact->setName($data['name']);
        $contact->setEmail($data['email']);
        $contact->setMessage($data['message']);

        $entityManager->persist($contact);
        $entityManager->flush();

        return new JsonResponse(['message' => 'Contact message sent successfully'], JsonResponse::HTTP_CREATED);
    }
}